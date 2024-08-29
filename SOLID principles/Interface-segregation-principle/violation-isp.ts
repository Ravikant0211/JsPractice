interface DocumentManager {

    openDocument(): void;

    closeDocument(): void;

    saveDocument(): void;

    scanDocument(): void;

}

class BasicEditor implements DocumentManager {

    openDocument(): void {
        console.log('openDucument');
    }

    closeDocument(): void {
        console.log('closeDocument');
    }

    saveDocument(): void {
        console.log('saveDocument');
    }

    scanDocument(): void {
        console.log('Do not do anything');
    }

}

// so this example is the violation of ISP principle, since BasicEditor doesn't scan the documents but still it 
// is forced to implement the 'scanDocument()' method.