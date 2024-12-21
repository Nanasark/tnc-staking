// export const toLocaleDate = (timestamp: bigint): string => {
//   const date = new Date(Number(timestamp) * 1000);
//   return date.toLocaleString();
// };

export const toLocaleDate = (timestamp: bigint): string => {
  const date = new Date(Number(timestamp) * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  if (year == 1970) {
    return `---000`;
  }
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// Example usage
// const timestamp: bigint = 1672531199n;
// console.log(toLocaleDate(timestamp)); // Output: "2022-12-31 23:59:59"
