function Pantry() {
  return (
    <div>
      {/* Links to navigate */}
      <nav className="bg-gray-100 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="font-bold text-xl tracking-tight">
                  Pantry Pal
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Additional text or menu items can go here */}
                <span>User's Name</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Pantry;
