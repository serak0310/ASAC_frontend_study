/*--- 기업 패널 반복 ---*/
const container = document.getElementById("company_list");
const wrapper = document.getElementById("company_item");

for (let i = 0; i < 7; i++) {
  const newItem = wrapper.cloneNode(true);
  container.appendChild(newItem);
}