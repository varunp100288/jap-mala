import contacts from "../js/contacts";
function TestFun() {
  return (
    <div>
      <strong>Map Function Data</strong>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.address}</p>
        </div>
      ))}
    </div>
  );
}

export default TestFun;
