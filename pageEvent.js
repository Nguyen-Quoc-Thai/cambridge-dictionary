const rightMenuItem = {
    "id": "CamDic",
    "title": "Search by Cambridge Dictionary (Word only)",
    "contexts": ["selection"]
}

// Adding new option on right click menu (context selection)
chrome.contextMenus.create(rightMenuItem)

// OnCLicked option
chrome.contextMenus.onClicked.addListener(function(dataClicked){

    // Check: Item clicked is CamDic and true context
    if(dataClicked.menuItemId === rightMenuItem.id && dataClicked.selectionText){

        const cambridgeURL = `https://dictionary.cambridge.org/vi/dictionary/english/${dataClicked.selectionText}`

        const chromePopup = {
            "url": cambridgeURL,
            "type": "popup",
            "width": screen.availWidth/1.5,
            "height": screen.availHeight/1.5
        }

        // Popup window for searching ...
        chrome.windows.create(chromePopup, () => {})
    }
})