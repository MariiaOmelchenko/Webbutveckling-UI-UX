SearchBar(
    query = "",
    onQueryChange = {},
    placeholder = {
            Text("Hinted search text")
    },
    onSearch = {},
    active = false,
    onActiveChange = {},
    leadingIcon = {
            IconButton(onClick = {}) {
                    Icon(
                            Icons.Filled.Menu,
                            contentDescription = "" // Add a valid content description
                    )
            }
    },
    trailingIcon = {
            IconButton(onClick = {}) {
                    Icon(
                            Icons.Default.Search,
                            contentDescription = "" // Add a valid content description
                    )
            }
    }
) 