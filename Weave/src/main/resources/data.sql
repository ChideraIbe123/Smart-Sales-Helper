# # Insert into `customer-product`.customer (customerid,customer_email,customer_first_name,
# #                                        customer_last_name,customer_user_name)
# # values(1000,'test2@test.com','Sa2','ami2','samin2');
# Insert into `customer-product`.prd_pref(pref_id,product_id, product_name,thumbs_up,customer_id )
# values(102,'10','Cookie',true, 1001);
#
# # Update prod_pref set customerid=100 where pref_id=101;
# commit;