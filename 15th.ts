let  guest_list : string[]=['Bilal','Owais','faisal','Fahim'];
for(let i=0; i<guest_list.length;i++){
    console.log('Respected Brothers'+guest_list[i]+',\n We invited you to on dinner today.\nThankyou\n');
}
let not_present: string='fahim';
let new_guest: string= 'Abbo';
guest_list[3]=new_guest;
for(let i=0; i<guest_list.length;i++){
    console.log('Respected Brothers'+guest_list[i]+',\n We invited you to on dinner today.\nThank you\n')
}
console.log(`Mr,${not_present} will not  coming today on dinner.`);