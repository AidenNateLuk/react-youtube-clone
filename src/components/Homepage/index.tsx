interface HomePageProps {
  closeSidebarWidth: () => void;
}
export const HomePage: React.FC<HomePageProps> = ({ closeSidebarWidth }) => {
  return (
    <div className="homepage__container" onClick={() => closeSidebarWidth()}>
      <p>Hello-Test</p>
    </div>
  );
};
