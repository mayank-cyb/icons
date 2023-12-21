# Instructions for adding new icons
1. Add the icon to the `./src/lsx/` folder.
    - SVG files should be 360×360 units
    - This is arbitrary but for best results all SVGs should be the same square dimensions
2. Make sure the filename is what you want to call the icon.
    - Use lower kebab-case
    - Icon names are prepended with `lsx-icon-`
3. Preview changes by running `npm run build`
    - Check `./build/lsx/lsx-icons.html` to preview your changes
4. Update version in `package.json` file
    - Increment right most number for minor tweaks
    - Increment middle number for adding new icons
    - Increment left most number if names or appearences of existing icons changed significantly
5. Publish new packaged by going to Azure DevOps
    - Go to `pipelines / All/ Packages / rpx-app-icons`
    - Click the `Run Pipeline` button
    - Click the `Run` button