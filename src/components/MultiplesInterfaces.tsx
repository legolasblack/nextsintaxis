interface TitleProps {
    title: string;
  }
  
  interface CountProps {
    count?: number; // Hacemos que sea opcional
  }
  
  interface ContentProps {
    content: string;
  }
  
  type Props = TitleProps & CountProps & ContentProps & undefined;
  
const MultiplesInterfaces: React.FC<Props> = ({ title, count, content }) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        {count !== undefined && <p>Count: {count + 1}</p>}
      </div>
    );
  };

  export default MultiplesInterfaces;