export default function getInitials(name) {
  let initials = name.split(" ");

  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = initials.substr(0, 2);
  }

  return initials.toUpperCase();
}
