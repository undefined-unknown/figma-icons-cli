const icons = [
  {
    name: "add",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 12.75V21H12.75V12.75H21V11.25H12.75V3H11.25V11.25H3V12.75H11.25Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "add-circle-static",
    type: "static",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z" fill="#D9DCDF"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4498 6.59998H11.5498V11.55H6.59961V12.45H11.5498V17.4H12.4498V12.45H17.3996V11.55H12.4498V6.59998Z" fill="#7F8792"/>\n</svg>\n',
  },
  {
    name: "add-small",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "alipay-fill",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M24 21.1025V17.1162C24 17.1162 23.1565 17.049 19.424 15.8024C18.8212 15.5986 18.0975 15.3343 17.2924 15.0403C16.7116 14.8282 16.0884 14.6006 15.4377 14.3691C16.3708 12.7567 17.1173 10.9128 17.6025 8.9197H12.4965V7.08333H18.7521V6.06063H12.4965V3H9.95096C9.50307 3 9.50307 3.44043 9.50307 3.44043V6.06063H3.17279V7.08333H9.4956V8.9197H4.27014V9.9424H14.4001C14.0343 11.2114 13.5341 12.4058 12.9444 13.4957C9.65237 12.4133 6.14384 11.5399 3.94168 12.0774C2.53081 12.4282 1.62755 13.0404 1.09007 13.6898C-1.35843 16.6609 0.395831 21.1697 5.56904 21.1697C8.62967 21.1697 11.5709 19.4677 13.8551 16.6683C17.2592 18.3031 24 21.1025 24 21.1025ZM1.85896 14.5483C2.52334 13.966 3.74013 13.6823 4.38958 13.6152C6.77836 13.3763 8.99545 14.287 11.6156 15.5635C9.77927 17.9523 7.43528 19.4453 5.09128 19.4453C1.06021 19.4453 -0.134181 16.2801 1.85896 14.5483Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "alipay-static",
    type: "static",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM15.3581 13.899C15.906 14.106 16.3912 14.2894 16.7869 14.4131C19.2005 15.1903 19.7323 15.2312 19.7732 15.2312V17.8085C19.7732 17.8085 15.4369 16.0085 13.2278 14.9449C11.755 16.7449 9.83231 17.8494 7.86868 17.8494C4.51413 17.8494 3.36867 14.9449 4.96413 13.0221C5.2914 12.6131 5.90504 12.204 6.80504 11.9994C8.23686 11.6312 10.4869 12.204 12.6141 12.8994C12.9823 12.204 13.3096 11.4267 13.555 10.6085H7.00958V9.95396H10.3641V8.7676H6.27322V8.11305H10.3641V6.43578C10.3641 6.43578 10.3641 6.14941 10.6505 6.14941H12.2869V8.11305H16.3369V8.7676H12.2869V9.95396H15.6005C15.2732 11.2631 14.8232 12.4494 14.2096 13.4721C14.6142 13.6178 14.9995 13.7634 15.3581 13.899ZM5.45504 13.5949C4.18686 14.6994 4.92322 16.7449 7.5414 16.7449C9.05504 16.7449 10.5687 15.804 11.755 14.2494C10.0778 13.4312 8.64595 12.8176 7.0914 12.9812C6.68231 13.0221 5.86413 13.2267 5.45504 13.5949Z" fill="#4D7CFF"/>\n</svg>\n',
  },
  {
    name: "android-fill",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M6 18C6 18.55 6.45 19 7 19H8V22.75C8 23.4404 8.55964 24 9.25 24C9.94036 24 10.5 23.4404 10.5 22.75V19H13.5V22.75C13.5 23.4404 14.0596 24 14.75 24C15.4404 24 16 23.4404 16 22.75V19H17C17.55 19 18 18.55 18 18V8H6V18ZM3.25 8.5C2.55964 8.5 2 9.05964 2 9.75V17.25C2 17.9404 2.55964 18.5 3.25 18.5C3.94036 18.5 4.5 17.9404 4.5 17.25V9.75C4.5 9.05964 3.94036 8.5 3.25 8.5ZM20.75 8.5C20.0596 8.5 19.5 9.05964 19.5 9.75V17.25C19.5 17.9404 20.0596 18.5 20.75 18.5C21.4404 18.5 22 17.9404 22 17.25V9.75C22 9.05964 21.4404 8.5 20.75 8.5ZM16.83 0.86C17.03 0.66 17.03 0.35 16.83 0.15C16.63 -0.05 16.32 -0.05 16.12 0.15L14.64 1.63C13.85 1.23 12.95 1 12 1C11.04 1 10.14 1.23 9.34 1.63L7.85 0.15C7.65 -0.05 7.34 -0.05 7.14 0.15C6.94 0.35 6.94 0.66 7.14 0.86L8.45 2.17C6.97 3.26 6 5.01 6 7H18C18 5.01 17.03 3.25 15.53 2.16L16.83 0.86ZM10.5 4.75C10.5 5.16421 10.1642 5.5 9.75 5.5C9.33579 5.5 9 5.16421 9 4.75C9 4.33579 9.33579 4 9.75 4C10.1642 4 10.5 4.33579 10.5 4.75ZM15 4.75C15 5.16421 14.6642 5.5 14.25 5.5C13.8358 5.5 13.5 5.16421 13.5 4.75C13.5 4.33579 13.8358 4 14.25 4C14.6642 4 15 4.33579 15 4.75Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "apple-fill",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7531 16.7271C21.2176 17.9137 20.9621 18.4457 20.2725 19.4922C19.3135 20.9588 17.9555 22.7858 16.2754 22.7963C14.7843 22.8104 14.3993 21.8233 12.3727 21.8408C10.3462 21.8478 9.92265 22.8139 8.4281 22.7999C6.75153 22.7858 5.46699 21.1373 4.50445 19.6777C1.81285 15.5791 1.52934 10.7734 3.1919 8.21831C4.36795 6.40524 6.23002 5.3412 7.98008 5.3412C9.75815 5.3412 10.8782 6.31774 12.3517 6.31774C13.7798 6.31774 14.6478 5.3377 16.7094 5.3377C18.2635 5.3377 19.912 6.18473 21.0881 7.65129C17.2379 9.75836 17.8644 15.2571 21.7531 16.7271ZM15.1448 3.69964C15.8939 2.7406 16.4609 1.38255 16.2579 0C15.0328 0.0840031 13.6048 0.864532 12.7683 1.87257C12.0122 2.7931 11.3857 4.16165 11.6307 5.4847C12.9643 5.52671 14.3433 4.73218 15.1448 3.69964Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "applet-fill",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.21389 15.6662C1.21538 12.3082 3.93565 9.58552 7.29368 9.58106C7.78999 9.58106 8.2486 9.84584 8.49675 10.2757C8.7449 10.7055 8.7449 11.235 8.49675 11.6648C8.2486 12.0947 7.78999 12.3594 7.29368 12.3594C5.95335 12.3589 4.7447 13.1659 4.2314 14.404C3.7181 15.6421 4.00126 17.0676 4.94882 18.0155C5.89638 18.9635 7.32171 19.2472 8.56006 18.7344C9.79842 18.2216 10.6059 17.0133 10.6059 15.673V6.84988H10.6248C10.864 3.55392 13.689 1.05073 16.9898 1.20988C20.2906 1.36903 22.8617 4.1324 22.7828 7.43608C22.7039 10.7398 20.0038 13.3772 16.6991 13.3786C15.9319 13.3786 15.31 12.7566 15.31 11.9894C15.31 11.2222 15.9319 10.6002 16.6991 10.6002C18.5268 10.598 20.007 9.11521 20.006 7.28755C20.005 5.45989 18.5232 3.97874 16.6956 3.97849C14.8679 3.97824 13.3857 5.45899 13.3843 7.28665V16.1273H13.3681C13.1294 19.3966 10.344 21.8893 7.06839 21.765C3.79277 21.6408 1.2042 18.9442 1.21389 15.6662Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "approval",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 20.5C3.5 21.3284 4.17157 22 5 22H19C19.8284 22 20.5 21.3284 20.5 20.5H3.5Z" fill="#222529"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3856 8.47044L13.4728 14.5005L18.5 14.5C18.7761 14.5 19 14.7239 19 15V17.5H5V15C5 14.7239 5.22386 14.5 5.5 14.5L10.5391 14.5005L10.8014 13H10.7961L10.9276 12.2781L11.5938 8.46716C10.4063 8.27312 9.5 7.24239 9.5 6C9.5 4.61929 10.6193 3.5 12 3.5C13.3807 3.5 14.5 4.61929 14.5 6C14.5 7.24957 13.5832 8.28502 12.3856 8.47044ZM14.0761 9.41973C15.2296 8.71794 16 7.44894 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 7.44883 8.77028 8.71775 9.92366 9.41957L9.2714 13H5.5C4.39543 13 3.5 13.8954 3.5 15V19H20.5V15C20.5 13.8954 19.6046 13 18.5 13H14.7258L14.0761 9.41973Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "approval-fill",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6214 9.65722C15.0227 9.03513 16 7.63145 16 5.9995C16 3.79037 14.2091 1.9995 12 1.9995C9.79086 1.9995 8 3.79037 8 5.9995C8 7.63285 8.97897 9.03754 10.3822 9.65883L9.68377 13.5H5.50132C4.39705 13.5 3.50174 14.395 3.50132 15.4992L3.5 19H20.4979L20.4992 15.5008C20.4997 14.3959 19.6041 13.5 18.4992 13.5H14.3201L13.6214 9.65722ZM20.5 20.5C20.5 21.3284 19.8284 22 19 22H5C4.17157 22 3.5 21.3284 3.5 20.5H20.5Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "apps",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M9.06897 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V9.06897C4.5 9.34511 4.72386 9.56897 5 9.56897H9.06897C9.34511 9.56897 9.56897 9.34511 9.56897 9.06897V5C9.56897 4.72386 9.34511 4.5 9.06897 4.5ZM19 4.5H14.931C14.6549 4.5 14.431 4.72386 14.431 5V9.06897C14.431 9.34511 14.6549 9.56897 14.931 9.56897H19C19.2761 9.56897 19.5 9.34511 19.5 9.06897V5C19.5 4.72386 19.2761 4.5 19 4.5ZM9.06897 14.431H5C4.72386 14.431 4.5 14.6549 4.5 14.931V19C4.5 19.2761 4.72386 19.5 5 19.5H9.06897C9.34511 19.5 9.56897 19.2761 9.56897 19V14.931C9.56897 14.6549 9.34511 14.431 9.06897 14.431ZM19 14.431H14.931C14.6549 14.431 14.431 14.6549 14.431 14.931V19C14.431 19.2761 14.6549 19.5 14.931 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V14.931C19.5 14.6549 19.2761 14.431 19 14.431ZM9.06897 3C10.1735 3 11.069 3.89543 11.069 5V9.06897C11.069 10.1735 10.1735 11.069 9.06897 11.069H5C3.89543 11.069 3 10.1735 3 9.06897L3 5C3 3.89543 3.89543 3 5 3L9.06897 3ZM19 3C20.1045 3 21 3.89543 21 5V9.06897C21 10.1735 20.1045 11.069 19 11.069H14.931C13.8264 11.069 12.931 10.1735 12.931 9.06897V5C12.931 3.89543 13.8264 3 14.931 3L19 3ZM5 12.931H9.06897C10.1735 12.931 11.069 13.8264 11.069 14.931V19C11.069 20.1045 10.1735 21 9.06897 21H5C3.89543 21 3 20.1045 3 19L3 14.931C3 13.8264 3.89543 12.931 5 12.931ZM19 12.931C20.1045 12.931 21 13.8264 21 14.931V19C21 20.1045 20.1045 21 19 21H14.931C13.8264 21 12.931 20.1045 12.931 19V14.931C12.931 13.8264 13.8264 12.931 14.931 12.931H19Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "arrow-chevrons-down",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9697 17.4999L12.5001 18.0303L13.0304 17.4999L17.5304 12.9999L16.4697 11.9393L12.5001 15.909L8.5304 11.9393L7.46974 12.9999L11.9697 17.4999ZM11.9697 11.4999L12.5001 12.0303L13.0304 11.4999L17.5304 6.99994L16.4697 5.93928L12.5001 9.90895L8.53039 5.93928L7.46974 6.99994L11.9697 11.4999Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "arrow-chevrons-left",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M5.98028 11.4545L5.44995 11.9848L5.98028 12.5151L10.4803 17.0151L11.5409 15.9545L7.57127 11.9848L11.5409 8.01514L10.4803 6.95448L5.98028 11.4545ZM11.9803 11.4545L11.45 11.9848L11.9803 12.5151L16.4803 17.0151L17.5409 15.9545L13.5713 11.9848L17.5409 8.01514L16.4803 6.95448L11.9803 11.4545Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "arrow-chevrons-right",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0152 12.5151L18.5455 11.9848L18.0152 11.4545L13.5152 6.95447L12.4545 8.01513L16.4242 11.9848L12.4545 15.9545L13.5152 17.0151L18.0152 12.5151ZM12.0152 12.5151L12.5455 11.9848L12.0152 11.4545L7.5152 6.95447L6.45454 8.01513L10.4242 11.9848L6.45454 15.9545L7.5152 17.0151L12.0152 12.5151Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "arrow-chevrons-up",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0304 6.46966L12.5001 5.93933L11.9697 6.46966L7.46973 10.9697L8.53039 12.0303L12.5001 8.06065L16.4697 12.0303L17.5304 10.9697L13.0304 6.46966ZM13.0304 12.4697L12.5001 11.9393L11.9697 12.4697L7.46973 16.9697L8.53039 18.0303L12.5001 14.0607L16.4697 18.0303L17.5304 16.9697L13.0304 12.4697Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "arrow-down-small",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0303 13.5696L7.06066 8.59998L6 9.66064L12.0303 15.691L18.0607 9.66064L17 8.59998L12.0303 13.5696Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "arrow-down-triangle",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2925 9.8254C17.5705 9.50106 17.3401 9 16.9129 9L7.08711 9C6.65993 9 6.42948 9.50106 6.70748 9.8254L11.6204 15.5571C11.8199 15.7899 12.1801 15.7899 12.3796 15.5571L17.2925 9.8254Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "arrow-forward",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1893 11.2501L13.4697 5.53039L14.5303 4.46973L22.0607 12.0001L14.5303 19.5304L13.4697 18.4697L19.1893 12.7501H2V11.2501H19.1893Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "arrow-forward-small",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2842 7.29777L13.8246 6.83105L12.8912 7.75021L13.3507 8.21693L16.4419 11.3561H6.00486H5.34985V12.6662H6.00486H16.42L13.3507 15.7831L12.8912 16.2498L13.8246 17.1689L14.2842 16.7022L18.4619 12.4596L18.9145 12L18.4619 11.5404L14.2842 7.29777Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "arrow-left",
    type: "configurable",
    width: 24,
    height: 24,
    content:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4697 4.46973L15.5303 5.53039L9.06065 12.0001L15.5303 18.4697L14.4697 19.5304L6.93933 12.0001L14.4697 4.46973Z" fill="#222529"/>\n</svg>\n',
  },
  {
    name: "fly-clear-circle-static",
    content:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M761.957334 87.490604A466.498887 466.498887 0 0 1 937.086206 262.619476 484.040845 484.040845 0 0 1 1004.538416 512.288405c0 89.897057-22.443693 173.120418-67.45221 249.668929A466.498887 466.498887 0 0 1 761.957334 937.086206 484.09968 484.09968 0 0 1 512.288405 1004.480735a484.09968 484.09968 0 0 1-249.610094-67.394529A475.358695 475.358695 0 0 1 87.548285 760.776026 481.973557 481.973557 0 0 1 20.096075 512.288405c0-89.188734 22.443693-171.93911 67.45221-248.487621A484.453842 484.453842 0 0 1 263.859619 87.490604 481.973557 481.973557 0 0 1 512.288405 20.096075c89.957046 0 173.179253 22.444847 249.668929 67.394529zM708.680817 385.71082L582.103231 512.288405 708.680817 638.865991l-69.755992 69.814826L512.288405 582.103231 385.71082 708.680817l-69.814826-69.814826L442.473579 512.288405 315.895994 385.71082l69.814826-69.814826L512.288405 442.473579 638.924825 315.895994l69.755992 69.814826z" fill="#9DA3AC" ></path><path d="M708.680817 385.71082L582.103231 512.288405 708.680817 638.865991l-69.755992 69.814826L512.288405 582.103231 385.71082 708.680817l-69.814826-69.814826L442.473579 512.288405 315.895994 385.71082l69.814826-69.814826L512.288405 442.473579 638.924825 315.895994l69.755992 69.814826z" fill="#FFFFFF" ></path></svg>',
    type: "static",
  },
  {
    name: "fly-comment-outline",
    content:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M512.331527 19.849678c-225.554035 0-408.455391 180.430638-408.455391 402.868735v313.377321c0 74.289414 60.805901 134.289578 136.169633 134.289578h136.115077V512.262284H194.65694v-89.491414c0-173.233556 142.024868-313.377321 317.675637-313.377321s317.674587 140.143765 317.674587 313.377321V512.262284H648.446605v358.123028h181.55951V915.131019H512.331527v89.543871h272.28471c75.310225 0 136.116126-60.000164 136.116126-134.289578v-447.666899c0-222.438097-182.8489-402.868735-408.400836-402.868735z" fill="currentColor"></path></svg>',
    type: "configurable",
  },
  {
    name: "fly-create-design",
    content:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M123.377592 901.22982v-621.990224h621.990225-310.995113v-103.624544h-362.868125A51.812272 51.812272 0 0 0 19.692308 227.427324v725.675509c0 28.61155 23.200721 51.812272 51.812271 51.812272H797.180088c28.61155 0 51.812272-23.200721 51.812272-51.812272v-362.868125h-103.624543v310.995112h-621.990225z" fill="currentColor"></path><path d="M848.99236 20.117496h-103.624543v155.497556h-155.497556v103.624544h155.497556v155.497556h103.624543v-155.497556h155.497556v-103.624544h-155.497556v-155.497556z" fill="currentColor"></path></svg>',
    type: "configurable",
  },
  {
    name: "fly-edit",
    content:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M167.722626 20.059159h442.990402l295.326934 295.326934V955.278807c0 27.170078-22.0157 49.238845-49.238844 49.238844H167.722626A49.238845 49.238845 0 0 1 118.483782 955.278807V69.298004c0-27.170078 22.014546-49.238845 49.238844-49.238845z m639.838493 885.980803V364.624938H561.474183V118.536848H216.907251v787.503114h590.653868z" fill="currentColor"></path></svg>',
    type: "configurable",
  },
  {
    name: "fly-error-fill",
    content:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M513.441738 19.717553c90.026843 0 173.353164 22.519223 249.928915 67.508583a467.039513 467.039513 0 0 1 175.324245 175.324246 484.581947 484.581947 0 0 1 67.508583 249.928914 484.581947 484.581947 0 0 1-67.508583 249.928915A467.039513 467.039513 0 0 1 763.370653 937.732456a484.581947 484.581947 0 0 1-249.928915 67.508583 484.581947 484.581947 0 0 1-249.928914-67.508583A475.860295 475.860295 0 0 1 88.188579 761.225369 482.462649 482.462649 0 0 1 20.679995 512.479296 482.413564 482.413564 0 0 1 88.188579 263.733223 484.975586 484.975586 0 0 1 264.695665 87.226136 482.413564 482.413564 0 0 1 513.441738 19.717553z" fill="#F54531" ></path><path d="M562.027745 264.916065V561.065303H464.904816V264.916065h97.073845z m0 395.637851v99.537696H464.904816V660.553916h97.073845z" fill="#FFFFFF" ></path></svg>',
    type: "configurable",
  },
  {
    name: "fly-success-static",
    content:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M512.288405 20.070695C240.587626 20.070695 20.070695 240.587626 20.070695 512.288405c0 271.70078 220.51693 492.21771 492.21771 492.21771 271.70078 0 492.21771-220.51693 492.21771-492.21771C1004.506115 240.587626 783.989185 20.089153 512.288405 20.089153z m0 885.980803c-217.065297 0-393.763093-176.697796-393.763093-393.763093 0-217.065297 176.697796-393.763093 393.763093-393.763093 217.065297 0 393.763093 176.697796 393.763093 393.763093 0 217.065297-176.697796 393.781551-393.763093 393.781551z m225.925105-611.326754L413.852246 619.104466 286.3633 492.113884 216.961471 561.515714l196.890775 196.872317L807.61534 364.624938l-69.40183-69.900194z" fill="#24B35F" ></path></svg>',
    type: "static",
  },
  {
    name: "fly-test-static",
    content:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M348.756784 74.440189A54.735547 54.735547 0 0 1 403.49233 19.704643h492.616071A109.46981 109.46981 0 0 1 1005.578212 129.174453v492.616071a54.735547 54.735547 0 1 1-109.469811 0v-492.616071h-492.616071A54.735547 54.735547 0 0 1 348.756784 74.440189zM20.34607 348.115357a109.46981 109.46981 0 0 1 109.46981-109.469811H677.167498A109.46981 109.46981 0 0 1 786.637308 348.115357v547.351617A109.46981 109.46981 0 0 1 677.167498 1004.936784H129.81588A109.46981 109.46981 0 0 1 20.34607 895.466974V348.115357z m301.043582 109.46981a54.735547 54.735547 0 1 0 0 109.471093h59.442339L209.510641 738.376327a54.735547 54.735547 0 0 0 77.394603 77.451049L458.227877 644.506026v59.387176a54.735547 54.735547 0 1 0 109.471093 0V512.320714A54.735547 54.735547 0 0 0 512.962141 457.585167H321.389652z" fill="#2254F4" ></path></svg>',
    type: "static",
  },
];

module.exports = {
  icons,
};
