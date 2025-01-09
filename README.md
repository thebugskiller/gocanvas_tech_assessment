## Breweries List Assessment

This project builds a web application displaying a list of breweries with pagination and details pages.

### Requirements

*   **Node.js:** Used for server-side development. Ensure you have Node.js installed (`node -v`) with a working npm package manager (`npm -v`).
*   **Editor (Optional):** Any code editor with the EditorConfig plugin installed. This helps maintain consistent coding style across different editors.

**Node.js Installation:**

**OS X:**

1.  Open Terminal (`/Applications/Utilities/Terminal.app`).
2.  Install Homebrew (if not already installed):

    ```bash
    ruby -e "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/homebrew/go/install](https://raw.githubusercontent.com/Homebrew/homebrew/go/install))"
    ```

3.  Install Node.js:

    ```bash
    brew install node
    ```

**Linux:**

1.  Open Terminal
2.  Update package lists:

    ```bash
    sudo apt-get update
    ```
3. Install dependencies:
    ```bash
    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    ```
4. Update package lists again:
    ```bash
    sudo apt-get update
    ```
5. Install Node.js:

    ```bash
    sudo apt-get install nodejs
    ```

### Development

1.  Install project dependencies:

    ```bash
    npm install
    ```

2.  Run the application:

    ```bash
    npm start
    ```

### Technologies

*   **Frontend:** React JS
*   **Styling:** Tailwind CSS

### Features

*   Displays a list of breweries.
*   Navigates through the brewery list using next/previous buttons.
*   Click on a brewery card to view detailed information.

**Note:** Links to `EditorConfig`, Node.js, and npm have been removed for clarity as they were already defined within the document.
