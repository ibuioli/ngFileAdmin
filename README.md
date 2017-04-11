# ngJson
Service for read Json Files (online or local) in Angular 2.

## For use the test app:

```
git clone https://github.com/ibuioli/ngFileAdmin
npm install
npm start
```

## For use in an existing proyect:

```
git clone https://github.com/ibuioli/ngFileAdmin
```
Copy from src/app folder the file ```fileadmin.service.ts```.

Import the service in your ```app.module.ts```:

```
import { FileAdminService } from './json.service';
```

Declare the service in your ```app.module.ts```:

```
providers: [FileAdminService,]
```

Import the Service in your component:

```
import { FileAdminService } from './fileademin.service';
```

Then call it in your ```constructor```:

```
constructor(private fileAdmin: FileAdminService) {}
```
