import imgLogitech from "../img/index/imglogitech.jpg"
import videoLogitech from "../img/index/videologitech.mp4"
import videoLogitechMouse from "../img/index/videologitechmouse.mp4"

const LogitechContainer = () => {

  return (
    <div>
      <img width="100%" src={ imgLogitech } alt="Logitech"/>
        <video controls src={ videoLogitech }/>
        <video controls src={ videoLogitechMouse }/>
    </div>
  );
};
export default LogitechContainer