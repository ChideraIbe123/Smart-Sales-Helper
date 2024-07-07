package com.People.Weave.service;

import com.People.Weave.entity.Item;
import com.People.Weave.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemRepository itemRepository;

    // Save operation
    @Override
    public Item saveItem(Item item)
    {
        return itemRepository.save(item);
    }

    // Read operation
    @Override public List<Item> fetchItemList()
    {
        return (List<Item>)
                itemRepository.findAll();
    }

    // Update operation
    @Override
    public Item
    updateItem(Item item,
                     Long itemId)
    {
        Item itemDB
                = itemRepository.findById(itemId)
                .get();

        if (Objects.nonNull(item.getItemName())
                && !"".equalsIgnoreCase(
                item.getItemName())) {
            itemDB.setItemName(
                    item.getItemName());
        }

        if (Objects.nonNull(
                item.getItemDesc())
                && !"".equalsIgnoreCase(
                item.getItemDesc())) {
            itemDB.setItemDesc(
                    item.getItemDesc());
        }

        if (item.getItemCount()>0) {
            itemDB.setItemCount(
                    item.getItemCount());
        }

        return itemRepository.save(itemDB);
    }

    // Delete operation
    @Override
    public void deleteItemById(Long ItemId)
    {
        itemRepository.deleteById(ItemId);
    }
}
