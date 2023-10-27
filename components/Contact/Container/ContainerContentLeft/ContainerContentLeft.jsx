import { useState, useContext } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "@/context/Provider";

const ContainerContentLeft = () => {
  const { handleInputChange } = useContext(Context);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formValues;

    if (!name || !email || !phone || !message) {
      toast.error("Lütfen tüm alanları doldurun!");
      return;
    }

    toast("Email Gönderiliyor...!");

    emailjs
      .sendForm(
        "service_jz17nvh",
        "template_nuvo6i4",
        e.target,
        "4DtEOn7XzYUucC2Xq"
      )
      .then((response) => {
        toast.success("Email Gönderildi!", response.status, response.text);
        setFormValues({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Email Gönderilemedi:", error);
      });
  };

  return (
    <div className="w-full flex mx-[10px] lg:border-r-[1px] h-full border-[#1E2D3D]">
      <ToastContainer />
      <div className="m-auto">
        <form
          id="myForm"
          onSubmit={handleSubmit}
          className="text-[#FEA55F] lg:text-sm text-xs flex flex-col"
        >
          <label className="text-[#607B96] my-2">_name:</label>
          <input
            onChange={(e) => {
              handleInputChange(e);
              setFormValues({
                ...formValues,
                name: e.target.value,
              });
            }}
            name="name"
            value={formValues.name}
            placeholder="Lütfen İsminizi Girin"
            className="border-[2px] lg:text-[12px] text-[11px] rounded-lg py-2 px-2 lg:w-[370px] w-[300px] border-[#1E2D3D] bg-[#011221]"
          />
          <label className="text-[#607B96] my-2">email:</label>
          <input
            onChange={(e) => {
              handleInputChange(e);
              setFormValues({
                ...formValues,
                email: e.target.value,
              });
            }}
            name="email"
            value={formValues.email}
            placeholder="Lütfen bir mail adresi girin"
            className="border-[2px] lg:text-[12px] text-[11px] rounded-lg py-2 px-2 lg:w-[370px] w-[300px] border-[#1E2D3D] bg-[#011221]"
          />
          <label className="text-[#607B96] my-2">telefon:</label>
          <input
            onChange={(e) => {
              handleInputChange(e);
              setFormValues({
                ...formValues,
                phone: e.target.value,
              });
            }}
            name="phone"
            value={formValues.phone}
            placeholder="İletişime geçilmesini istediğiniz numarayı girin"
            className="border-[2px] lg:text-[12px] text-[11px] rounded-lg py-2 px-2 lg:w-[370px] w-[300px] border-[#1E2D3D] bg-[#011221]"
          />
          <label className="text-[#607B96] my-2">mesajınız:</label>
          <div className="">
            <textarea
              onChange={(e) => {
                handleInputChange(e);
                setFormValues({
                  ...formValues,
                  message: e.target.value,
                });
              }}
              name="message"
              value={formValues.message}
              maxLength={500}
              placeholder="Talebinize daha hızlı yanıt verebilmemiz için, bize biraz bilgi paylaşın"
              className="border-[2px] lg:min-h-[150px] min-h-[100px] lg:text-[12px] text-[11px] rounded-lg py-2 px-2 lg:w-[370px] w-[300px] border-[#1E2D3D] bg-[#011221]"
            />
          </div>
          <button
            className="border-[1px] text-[#5565E8] border-[#5565E8] mt-4 rounded-xl px-4 py-2 w-fit mx-auto"
            type="submit"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContainerContentLeft;
