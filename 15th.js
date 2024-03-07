var guest_list = ['Bilal', 'Owais', 'faisal', 'Fahim'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Brothers' + guest_list[i] + ',\n We invited you to on dinner today.\nThankyou\n');
}
var not_present = 'fahim';
var new_guest = 'Abbo';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Brothers' + guest_list[i] + ',\n We invited you to on dinner today.\nThank you\n');
}
console.log("Mr,".concat(not_present, " will not  coming today on dinner."));
