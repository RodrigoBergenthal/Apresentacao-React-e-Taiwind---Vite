import React from "react";
import AboutImage from "../assets/aboutme3-image.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20 flex items-center justify-center" id="about">
    <div className="flex space-x-12 max-w-5xl mx-auto">
      <img
        src={AboutImage}
        alt=""
        className="w-96 h-72 rounded object-cover mb-8 md:mb-0"/>
        <div>
        <h2 className="text-4xl font-bold w-48 mb-12 bg-gradient-to-r from-red-800 to-red-300'">Sobre min</h2>
          <p className="text-lg mb-8">
            Profissional com perfil de liderança, habilidades de resolução de problemas e forte capacidade de adaptabilidade. 
            Possuo experiências como Gerente de E-commerce implementando melhorias de performance e SEO e de desenvolvimento FrontEnd. 
            Comprometido com o aprendizado contínuo e autodidata, valorizo o respeito e a colaboração no ambiente de trabalho.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <i className="fab fa-html5 text-4xl text-gray-600" aria-hidden="true"></i>
            <i className="fab fa-react text-4xl text-blue-500" aria-hidden="true"></i>
            <i className="fab fa-node text-4xl text-green-600" aria-hidden="true"></i>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default About;

