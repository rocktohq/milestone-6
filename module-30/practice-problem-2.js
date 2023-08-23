// Even Friends
const evenFriends = (friends) => {
    const evenFriendList = [];

    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            evenFriendList.push(friend);
        }
    }

    return evenFriendList;
}

const friends = ["Rashed", "Roman", "Alamin", "Imran", "Bhuban", "Shawon"];
const evenFriendList = evenFriends(friends);
console.log(evenFriendList);