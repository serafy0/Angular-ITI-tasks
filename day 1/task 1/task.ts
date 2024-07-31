interface ResponseData<D> {
  statusCode: number;
  message: string;
  data: D[];
}

interface PhoneData {
  name: string;
  phone: string;
}

function generic<T>(genericData: T): T {
  return genericData;
}

console.log(generic({ name: "abanoub", phone: "1234234" }));

function getData(): ResponseData<PhoneData> {
  let r: ResponseData<PhoneData> = {
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

function showData(): void {
  console.log(getData());
}

showData();
