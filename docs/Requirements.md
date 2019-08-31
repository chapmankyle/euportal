
# The requirements
- facilitate various aspects of the sales, distribution and logistics of goods purchased over the internet.
- flexible and allow for plugins into the various phases of an e-commerce solution.

# Solution Specification:
- sells an e-Commerce solution as a service to various Suppliers.
- cloud based solution. 
- The application should facilitate the onboarding of a new customer who in this context will be a Supplier (or Service Provider).
- the Supplier offers a product or service; 
- The Consumer buys the product from the Supplier.

# Build an application that:
- facilitates the e-commerce end-to-end process that your client (the Supplier) can use to market and sell their products/services.

## The Supplier 
- need to be able to register his product or service with
    - a selling price 
    - List quantities where applicable 
- The Supplier also need to be able to supply a quote if requested.

## The Merchant:
- Optional in the supply chain, however need to catered for in the application. 
- The Merchant is only of value if he is to be distributing/transporting the product/service on behalf of the Supplier. 
- If applicable the Supplier will register Merchants against their products/service. 
- The Merchant should be notified when goods/services need to be moved to a Buyer. 
- This is a potential integration point to another system. Therefore an API need to exist here.
 
## The Buyer :
- Will be able to search for a product from the Supplier’s catalog of goods/services. 
- The buyer can then buy/order a product. 
- The buyer may also request and then accept a quote for an item or a description.
 
## The transaction.
- Needs t0o be facilitated by the application
 
## Customize;
- Company logo
- 2 main colors
- PS: User registration on the site must be specific to the Supplier in question.
  
# Examples

## A Consulting firm is offering their IT services using the App. 
- They are therefore acting as the Supplier. 
- First they need to onboard on the e-Commerce site. 
- They then register their Service as an hourly rate against an IT resource. 
- A Company needing IT services then requests a quote from the Supplier for a certain work-item. 
-The IT form then supplies a quote 
- Once the Buyer accepts the quote the transaction takes place.
 
## A Clothing Industry want to sell their garments online. 
- They need to onboard on the e-Commerce site. 
- Thereafter they will register their catalog of goods with prices.
- A Consumer will then buy items from the app. 
- A courier service company need to be notified of a delivery to the Buyer. 
- The items to courier will be accessible via an open API, which the courier company can use from their Third Party system (please don’t implement the Courier service company’s system)
