// tieng-nhat
const n5 = [
  "N5: Nấu cơm",
  "N5: Quét nhà",
  "N5: Thể dục",
  "N5: Ngủ dậy",
  "N5: Đánh răng",
  "N5: Thể dục",
];
const n4 = [
  "N4: Nấu cơm",
  "N4: Quét nhà",
  "N4: Thể dục",
  "N4: Ngủ dậy",
  "N4: Đánh răng",
  "N4: Thể dục",
];
const n3 = [
  "N3: Nấu cơm",
  "N3: Quét nhà",
  "N3: Thể dục",
  "N3: Ngủ dậy",
  "N3: Đánh răng",
  "N3: Thể dục",
];
const n2 = [
  "N2: Nấu cơm",
  "N2: Quét nhà",
  "N2: Thể dục",
  "N2: Ngủ dậy",
  "N2: Đánh răng",
  "N2: Thể dục",
];
const tiengnhat = [
  "N5: Tiếng nhật hàng ngày",
  "N4: Tiếng Nhật trong cuộc sống",
  "N3: Quản trị cảm xúc",
  "N2: Tiếng Nhật business",
];
let menuTN = [];
tiengnhat.map((value, index, array) => {
  menuTN.push({
    key: `tn-${index}`,
    label: value,
    children: n5.map((val1, index1) => ({
      key: `${index}-${index1}`,
      label: val1,
    })),
  });
});

// ky-nang-mem
const kynangmem = [
  "Giao tiếp hàng ngày",
  "Giao tiếp trong công việc",
  "Kỹ năng lãnh đạo",
  "Kỹ năng start-up",
];
let menuKNM = [];

kynangmem.map((value, index, array) => {
  menuKNM.push({
    key: `knm-${index}`,
    label: value,
  });
});
export { menuTN, menuKNM, tiengnhat, n5 };
