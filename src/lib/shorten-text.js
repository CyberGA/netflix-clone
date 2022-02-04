
//& function to reduce the length of a string
export default function shortened(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " . . . . " : str;
  }