interface TitlePropsType {
  content: string;
  size?: number;
  width?: string | number;
}

const TitlePage: React.FC<TitlePropsType> = ({ content, size = 48, width = '100%' }) => {
  return (
    <h2
      style={{
        fontSize: `${size}px`,
        fontFamily: "'Shantell Sans', cursive",
        textAlign: 'center',
        margin: '0 auto 56px auto',
        fontWeight: 500,
        maxWidth: `${width === '100%' ? width : `${width}px`}`,
      }}
    >
      {content}
    </h2>
  );
};

export default TitlePage;
