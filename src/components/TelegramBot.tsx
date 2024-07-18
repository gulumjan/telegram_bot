import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormTg {
  userName: string;
  email: string;
  subject: string;
  description: string;
}

const TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
console.log(TOKEN, CHAT_ID);

const TelegramBot = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormTg>({
    mode: "onChange",
  });
  const messageDesign = (data: IFormTg) => {
    let messageTG = `userName:<b>${data.userName}</b>\n`;
    messageTG += `email:<b>${data.email}</b>\n`;
    messageTG += `subject:<b>${data.subject}</b>\n`;
    messageTG += `description:<b>${data.description}</b>\n`;
    return messageTG;
  };

  const OnSubmit: SubmitHandler<IFormTg> = async (data) => {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: messageDesign(data),
    });
    reset();
  };

  // const sendMessage=async(data)=>{
  //   let obj={
  //     chat_id:CHAT_ID,
  //     parse_mode:"html",
  //     text:data
  //   }
  //   await axios.post()
  // }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        marginTop: "20px",
      }}
      onSubmit={handleSubmit(OnSubmit)}
    >
      <input
        placeholder="userName"
        {...register("userName", { required: true })}
        type="text"
      />
      {errors.userName && <span style={{ color: "red" }}>UnCorrect</span>}
      <input
        placeholder="email"
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        type="text"
      />
      {errors.email && <span style={{ color: "red" }}>UnCorrect</span>}
      <input
        placeholder="subject"
        {...register("subject", { required: true })}
        type="text"
      />
      {errors.subject && <span style={{ color: "red" }}>UnCorrect</span>}
      <input
        placeholder="description"
        {...register("description", { required: true })}
        type="text"
      />
      {errors.description && <span style={{ color: "red" }}>UnCorrect</span>}

      {isSubmitting ? (
        <button type="button">Sending...</button>
      ) : (
        <button type="submit">Send</button>
      )}
    </form>
  );
};

export default TelegramBot;
