function Profile() {
  return (
    <>
      <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
          name="Alice"
          age={30}
          greetings={
            <div>
              <strong>Hi Alice, Have a Wonderful day!</strong>
            </div>
          }
        >
          <p>Hobbies:Reading , Hiking</p>
          <button>Contact</button>
        </ProfileCard>

        <ProfileCard
          name="Bob"
          age={25}
          greetings={
            <div>
              <strong>Hi Bob, Have a Wonderful day!</strong>
            </div>
          }
        >
          <p>Hobbies:Reading , Hiking</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
    </>
  ); 
}
export default Profile;

function ProfileCard(props) {
  return (
    <>
    <h2>Name: {props.name}</h2>
    <p>Age: {props.age}</p>
    <p>{props.greetings}</p>
    <div>{props.children}</div>
    </>
  );
}
