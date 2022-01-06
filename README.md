# Category-tiles

## Description:
This app will add a category detail tile, with catgeory **banner image** (*fetched from CMS master data*), **Category Name** and **Category Url**.

## Mandatory Parameters:
- Category Name     ` "categoryName" `
- Category Url      ` "categoryUrl" `
- Image Url Path    ` "imgUrl" `

## Steps to add:
There are two ways to add this app, one from json block and one calling from react component using json block props. Below we have mentioned both the ways.

### Calling app from Json Block
1. Call the block name inside any blocks "children".

        "category-tiles" 

2. Now define that block below with mandatory props.

    ` "category-tiles#home": { `

        "props": {
            "categoryName": "",
            "categoryUrl": "",
            "imgUrl": ""
        }
    ` } `
### Calling app from react component.
1. Add the app under dependecy of your Store's manifest.json file.

    ` "dependencies": { `

        "{account-name}.category-tiles": "0.x"

    ` } `
    
2. Call the app iside props of any json block.

      ` "props": { `

        "CategoryTiles": "category-tiles"

      ` } `

3. Call the app names "CategoryTiles" inside any react component.
 
      ` return ( `

          <props.CategoryTiles categoryObj={category} imgUrl={imgUrl} />

      ` ); `

4. Link your app and check the results
