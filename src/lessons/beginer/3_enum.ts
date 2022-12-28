enum Membership {
  Sipmple,
  Standart,
  Premium,
}

const membership = Membership.Standart; // 1
const membershipReverse = Membership[2]; // Premium
console.log("enum: ", membership, membershipReverse);

enum SocialMedia {
  VK = "vk",
  FACEBOOK = "fb",
  INSTAGRAM = "inst",
}
