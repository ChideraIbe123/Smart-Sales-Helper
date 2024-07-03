package com.People.Weave.controller;

import com.People.Weave.entity.Item;
import com.People.Weave.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class ItemController {
    // Annotation
@Autowired
    private ItemService itemService;

    // Save operation
    @PostMapping("/items")
    public Item saveIte(@RequestBody Item item)
    {
        return itemService.saveItem(item);
    }

    // Read operation
    @GetMapping("/items")
    public List<Item> fetchItemList()
    {
        return itemService.fetchItemList();
    }

    // Update operation
    @PutMapping("/items/{id}")
    public Item
    updateItem(@RequestBody Item item,
                     @PathVariable("id") Long itemId)
    {
        return itemService.updateItem(
                item, itemId);
    }

    // Delete operation
    @DeleteMapping("/items/{id}")
    public String deleteItemById(@PathVariable("id")
                                       Long itemId)
    {
        itemService.deleteItemById(
                itemId);
        return "Deleted Successfully";
    }
}
