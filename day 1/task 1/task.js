function generic(genericData) {
    return genericData;
}
console.log(generic({ name: "abanoub", phone: "1234234" }));
function getData() {
    var r = {
        statusCode: 200,
        message: "hello",
        data: [
            {
                name: "abanoub",
                phone: "123",
            },
            {
                name: "omar",
                phone: "1234",
            },
        ],
    };
    return r;
}
function showData() {
    console.log(getData());
}
showData();
