# YearPicker

YearPicker.js is a lightweight yet configurable year picker for jQuery that makes it easy to select a year from a popup similar to the date picker.

### Add the class yearpicker
```
<input type="text" class="yearpicker" value="">
```

### How do use yearpicker
```
$('.yearpicker').yearpicker()
```

### All default options to customize the year picker
```
$('.yearpicker').yearpicker({

  // Auto Hide
  autoHide: true,

  // Initial Year
  year: null,

  // Start Year
  startYear: null,

  // End Year
  endYear: null,

  // Element tag
  itemTag: 'li',

  // Default CSS classes
  selectedClass: 'selected',
  disabledClass: 'disabled',
  hideClass: 'hide',
  highlightedClass: 'highlighted',

  // Custom template
  template: `<div class="yearpicker-container">
              <div class="yearpicker-header">
                  <div class="yearpicker-prev" data-view="yearpicker-prev">&lsaquo;</div>
                  <div class="yearpicker-current" data-view="yearpicker-current">SelectedYear</div>
                  <div class="yearpicker-next" data-view="yearpicker-next">&rsaquo;</div>
              </div>
              <div class="yearpicker-body">
                  <ul class="yearpicker-year" data-view="years">
                  </ul>
              </div>
          </div>
  `,
  
});
```
