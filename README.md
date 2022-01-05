# Category-tiles

## Description:
This app will add a category detail tile, with catgeory **banner image** (*fetched from CMS master data*), **Category Name** and **Category Url**.

## Mandatory Parameters:
- Category Object
- Image Url path

## Steps to add:
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
