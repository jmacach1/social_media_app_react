import React, { Component } from 'react';



export default MessageBox = (props) => {
  const {success, msg } = props.message;
  if (msg === "") return (<div></div>);

  const msg_style = success ? styles.success : styles.failure;
  return (
    <div className={`${styles.message_box} ${msg_style}`}>
      <p>{msg}</p>
    </div>
  )
}