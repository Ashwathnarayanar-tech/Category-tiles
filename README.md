# Category-tiles

## Description:
This app will add a category detail tile, with catgeory **banner image** (*fetched from CMS master data*), **Category Name** and **Category Url**.

## Mandatory Parameters: ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)
| Param Name     |  Code | Description|
| -------------- | ----------- | ----------- |
|Category Name|` "categoryName" `| Renders the name of the category |
|Category Url|` "categoryUrl" `| Adds the category url in Banner CTA |
|Image Url Path|` "imgUrl" `| Path of the category banner image |

## Optional Parameters:
| Param Name     |  Code | Description|
| -------------- | ----------- | ----------- | 
|Category Name|` "btnIconClass" `| You can use predefined icon id names from [this link](https://github.com/vtex-apps/store-icons/blob/cbbb1b82bfca247a811d146b1e2cafb642db1928/docs/ICONPACK.md) |

## Steps to add:
There are two ways to add this app, one from json block and one calling from react component using json block props. Below we have mentioned both the ways.


### Adding app dependency
```json
  "dependencies": {
    "echidna.category-tiles": "0.x"
  }
```
### Calling app from Json Block
1. Call the block name inside any blocks "children".
    ```json
    "category-tiles" 
    ```

2. Now define that block below with mandatory props.
    ```json
    "category-tiles": {
        "props": {
            "categoryName": "",
            "categoryUrl": "",
            "imgUrl": ""
        }
    }
    ```

3. Save the block and see the changes
### Calling app from react component.
   
1. Call the app iside props of any json block.
    ```json
    "props": {
        "CategoryTiles": "category-tiles"
    }
    ```

2. Call the app names "CategoryTiles" inside any react component.
 
    ```html
    <props.CategoryTiles categoryObj={category} imgUrl={imgUrl} />
    ```

3. Link your app and check the results


## Customization
In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles                | 
| -------------------------- |
| `catContainer`              |
| `imgSize`                |
| `imgName`       |
