import React from "react";
import AboutImage from "../assets/aboutme3-image.jpg";
import '../responsive.css'; // Importando o arquivo CSS de regras de mídia

const About = () => {
  return (
    <nav className="bg-black text-white py-2 flex items-center justify-center" id="about">
      <div className="flex space-x-12 max-w-5xl mx-auto flex-wrap">
        <img
          src={AboutImage}
          alt=""
          className="w-96 h-72 rounded object-cover mb-8 md:mb-0 hover:animate-shake animate-infinite animate-ease-linear"
        />
        <div className="flex-1">
          <h2 className="text-4xl font-bold w-48 bg-gradient-to-r from-red-800 to-red-300 mb-12">Sobre min</h2>
          <div className="animate-fade-down animate-thrice animate-duration-[2000ms] animate-delay-[5ms] animate-ease-linear">
            <p className="text-lg mb-8 leading-relaxed">
              Essa é uma apresentação pessoal para o projeto Front end Fusion aonde quero me apresentar e contar um pouco da minha História: 
              <br />Profissional com perfil de liderança, habilidades de resolução de problemas e forte capacidade de adaptabilidade. Possuo experiências como Gerente de E-commerce implementando melhoras de performance e SEO e de desenvolvimento FrontEnd. 
              <br />Comprometido com o aprendizado contínuo e autodidata, valorizo o respeito e a colaboração no ambiente de trabalho. 
              <br />Sou casado a 20 anos e tenho um filho de 16 que é programador também, onde fizemos muitos projetos e estudamos inglês juntos. Fora eu estar com minha família, eu passo a maior parte do tempo jogando na Steam ou assistindo um anime!
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <i className="fab fa-html5 text-8xl text-gray-600 animate-jump-out animate-infinite animate-duration-[5000ms] animate-ease-linear" aria-hidden="true"></i>
            <i className="fab fa-react text-8xl text-blue-500 animate-spin animate-infinite animate-ease-linear" aria-hidden="true"></i>
            <i className="fab fa-node text-8xl text-green-600 animate-bounce animate-infinite animate-ease-linear" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default About;
