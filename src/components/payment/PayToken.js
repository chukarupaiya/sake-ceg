import { React } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../../config/ChatLogics";
import "../Pay.css";

const PayToken = (props) => {
  var receiver = "karupaiya";
  var amount = props.content;
  var status = "Paid";
  var date = new Date(props.date);
  var note = props.note;
  const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  return (
    <div style={{ display: "flex" }} key={props.id}>
      {(isSameSender(props.messages, props.m, props.i, props.user_id) ||
        isLastMessage(props.messages, props.i, props.user_id)) && (
        <Tooltip label={props.sender_name} placement="bottom-start" hasArrow>
          <Avatar
            mt="7px"
            mr={1}
            size="sm"
            cursor="pointer"
            name={props.sender_name}
            src={props.sender_pic}
          />
        </Tooltip>
      )}
      <div
        style={{
          backgroundColor: `${
            props.sender_id === props.user_id
              ? "rgb(54,57,62)"
              : "rgb(40,43,48)"
          }`,
          marginLeft: isSameSenderMargin(
            props.messages,
            props.m,
            props.i,
            props.user_id
          ),
          marginTop: isSameUser(props.messages, props.m, props.i, props.user_id)
            ? 7
            : 10,
          borderRadius: "20px",
          padding: "5px 15px",
          maxWidth: "75%",
          minWidth: "260px",
          color: "white",
          height: "185px",
        }}
      >
        <p class="payment_user">Token Transfer</p>
        <p class="payment_note">{note}</p>

        <p class="payment_amount">
          {amount}
          <span className="payment_currency">{props.currency}</span>
        </p>

        <div style={{ display: "flex" }}>
          <p class="payment_status">{status}&ensp;&ensp;</p>
          <p class="payment_date">{month[date.getMonth()]}&ensp;{date.getDate()}</p>
        </div>
      </div>
    </div>
  );
};

export default PayToken;
