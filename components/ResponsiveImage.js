export default function ResponsiveImage({ src, width, alt = "" }) {
  return (
    <div style={{ width }}>
      <img src={src} alt={alt} />
    </div>
  );
}
