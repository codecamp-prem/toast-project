# React + TypeScript + Vite

1. toast library that has the following abilities:
   - Add a toast message
   - Remove a toast message by id
   - Some way to access all the toast messages
2. When a toast is created it have the following options that you can configure
   - `autoDismiss`: a boolean that determines if the toast should automatically dismiss itself after a certain amount of time
   - `autoDismissTimeout`: the amount of time in milliseconds that the toast should wait before dismissing itself if `autoDismiss` is true
   - `position`: the position on the screen where the toast should appear (`top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`)
3. Toast messages remove themselves when clicked
