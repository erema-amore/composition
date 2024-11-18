const UserInfo = (props) => {
  
  return (
      <div className="user-info">
        <img style={{width: '350px', height: '250px'}} className="avatar"
        src={props.author.avatarUrl}/>
        <div className="user-info_name">{props.author.name}</div>
      </div>
  );
  
};

export default UserInfo