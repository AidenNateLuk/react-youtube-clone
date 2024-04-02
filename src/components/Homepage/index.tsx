interface HomePageProps {
  updateSidebarWidth: () => void;
}
export const HomePage: React.FC<HomePageProps> = ({ updateSidebarWidth }) => {
  return (
    <div className="homepage__container" onClick={() => updateSidebarWidth()}>
      <p>Hello-Test</p>
    </div>
  );
};
