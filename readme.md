# File, folder convention

* * *

- ## Naming convention

    1. file định nghĩa, không có logic: `\[underscore\]<định danh>.<chức năng - thường là tên folder hiện tại>.{ts, scss}` ví dụ `url.config.ts, order.model.ts`
    2. file xử lý logic, tính toán :  `\[camelCase\].ts`  ví dụ : `stringUtils.ts`
    3. file component chính : `\[ComponentName\].tsx` , ví dụ `CreateProduct.tsx`
    4. file component bổ sung : `\[PascalCase\].tsx` ví dụ :`SelectVariant.tsx`
    5. tên folder thông thường: `\[kebab-case\]` ví dụ `inventory-adjustment`
    6. tên folder component: `\[PascalCase\]` ví dụ `CreateInventory`

- ## Rule sử dụng những folder chung : `assets, components, config, utils`

    1. chỉ chưa những file có thể tái sử dụng cho nhiều module, nếu không tái sửa dụng thì đưa về module nhỏ. Ví dụ: không đặt `productUtils.ts` trong Folder utils mà phải đặt trong `pages/product/helper.ts`

    2. khi các team có contribute cần thông báo lên channel `dev-fe` để mọi người cảm ơn và sử dụng, tránh viết lại

    3. Khi cần sử dụng lại các file của module các, ví dụ order cần dùng `product/helper.ts` =\> export file `product/helper.ts` trong `utils/index.ts`, các folder khác utils cũng tương tự, components, config...

- ## Rule sử dụng file trong các Component

    1. `index.tsx` : file export ra tất cả các file trong component
    2. `MainFeature.tsx`: component chính
    3. `SubFeature.tsx` : component bổ sung
    4. `style.ts` : file styled-component
    5. `helper.ts`: file xử lý logic, khai báo constant của module
    6. `index.scss` file style nếu dùng css. ưu tiên dùng styled-component cho đỡ bị over-write css module khác
    7. `<Component>Provider.tsx` : file contextApi, ví dụ `ProductProvider.tsx`
