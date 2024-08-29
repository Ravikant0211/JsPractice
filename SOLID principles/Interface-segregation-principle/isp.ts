// interface DocumentManager {

//     openDocument(): void;

//     closeDocument(): void;

//     saveDocument(): void;

//     scanDocument(): void;

// }

interface DocumentOpener { 
    openDocument(): void;
}

interface DocumentCloser {
    closeDocument(): void;
}

interface DocumentSaver {
    saveDocument(): void;
}

interface DocumentScanner {
    scanDocument(): void;
}

class BasicEditor implements DocumentOpener, DocumentCloser, DocumentSaver {

    openDocument(): void {
        console.log('openDucument');
    }

    closeDocument(): void {
        console.log('closeDocument');
    }

    saveDocument(): void {
        console.log('saveDocument');
    }

}

class AdvancedEditor implements DocumentOpener, DocumentCloser, DocumentSaver, DocumentScanner {

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
        console.log('scanDocument');
    }
    
}

