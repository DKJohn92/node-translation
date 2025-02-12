# Translation Service (Node.js)

This is a simple translation service implemented in **Node.js (TypeScript)**. It reads translations from a `data.json` file and returns the appropriate translated text based on the provided `sourceText`, `targetLanguage`, and `screenName`.

---

## Node.js Version

### **Installation**
1. Clone this repository:
   ```sh
   git clone https://github.com/DKJohn92/node-translation.git
   cd translation-service
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### **Usage**
Run the translation function manually:
```sh
node translate.js
```
Or import it into another script:
```typescript
import translate from "./translate";

console.log(translate("WOVN.io", "en", "MainActivity")); // Expected: "WOVN.io - MainScreen"
console.log(translate("WOVN.io", "en", ""));            // Expected: "WOVN.io"
```

### **Running Tests**
Run unit tests using Jest:
```sh
npm test
```

**Project Structure**
```
├── data.json            # Translation dataset
├── translate.ts         # Translation function
├── translate.test.ts    # Jest tests
├── package.json         # Dependencies and scripts
└── README.md            # Documentation
```