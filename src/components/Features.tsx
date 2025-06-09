import React from 'react';
import { Ruler, Palette, Clock, Award } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Ruler,
      title: "Sob Medida",
      description: "Cada cortina é feita especialmente para o seu ambiente, aproveitando cada centímetro com perfeição."
    },
    {
      icon: Palette,
      title: "Design Personalizado",
      description: "Criamos cortinas exclusivas que combinam com seu estilo e atendem às suas necessidades."
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Cumprimos prazos com eficiência. Qualidade e agilidade em cada etapa."
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Trabalhamos com tecidos de alta qualidade e acabamento impecável em cada cortina."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 lg:px-24 xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Por que escolher nossas cortinas?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Experiência, qualidade e compromisso em cada projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-inter">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed font-inter">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
