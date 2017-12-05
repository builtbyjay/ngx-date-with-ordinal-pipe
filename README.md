# DateWithOrdinal Pipe

Unfortunately, [Angular's DatePipe](https://angular.io/api/common/DatePipe)
doesn't provide the two-character-length suffix for days in the month
(st, nd, rd, th). These suffixes are called ordinal indicators.
This handy little pipe extends the DatePipe to provide them whilst maintaining
all the existing format options you're used to.

The `dateWithOrdinal` pipe accepts the same date format string as
[Angular's DatePipe](https://angular.io/api/common/DatePipe) with one addition:

An `o` (lower-case O) will return the ordinal indicator.

``` html
{{ '2017-01-01' | dateWithOrdinal:'EEEE, do MMMM, yyyy' }}
<!--output 'Friday, 1st December, 2017'-->
```

This module works with Angular 2.4 and above.

Installation
------------

`npm install --save ngx-date-with-ordinal-pipe`

Usage
-----

Import `DateWithOrdinalModule` into your app's root module:

``` typescript
import { DateWithOrdinalModule } from 'ngx-date-with-ordinal-pipe';

@NgModule({
  imports: [
    DateWithOrdinalModule
  ]
})
```

This will make the `dateWithOrdinal` pipe available for use in your
component's templates:

``` typescript
@Component({
  selector: 'app-component',
  template: `
    Last updated: {{ today | dateWithOrdinal:'EEE do MMMM yyyy' }}
  `
})
class AppComponent {
  today: Date = new Date();
}
```

You can also inject the pipe into your component by specifying a constructor
parameter with the `DateWithOrdinalPipe` type. You can then use the pipe's
`transform()` method directly:

``` typescript
import { DateWithOrdinalPipe } from 'ngx-date-with-ordinal-pipe';

@Component({
  selector: 'app-component',
  template: `
    Last updated: {{ todayFormatted }}
  `
})
class AppComponent {
  todayFormatted: string;

  constructor(dateWithOrdinalPipe: DateWithOrdinalPipe) {
    this.todayFormatted = dateWithOrdinalPipe
      .transform(new Date(), 'EEE do MMMM yyyy');
  }
}
```
