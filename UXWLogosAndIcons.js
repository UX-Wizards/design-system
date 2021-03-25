function UXWLogosAndIcons(props) {
  return (
    <div className="container">
      <div className="flex-col flex-shrink-0 px-4 py-4">
        <div className="container">
          <UXWSubsection anchor="snav-logos" title="Logos">
            <p>The Wizards hat will always accompany the UX WIZARDS text.  The rectangular version will be the main logo and includes an arrow cursor as if the logo is being clicked on.</p><br />
            <p>The square and circle versions are to be used for things such as our Slack group’s profile.</p><br />
            <p className="pb-4">There are three variations in colors - white text on black, black text on white and white text on our branded Navy, Magician’s Cloak.</p>
            <img src="assets/logos.png" alt="" />
          </UXWSubsection>
          <UXWSubsection anchor="snav-clearance" title="Clearance">
            <p>To ensure that logos are clearly visible, surround with clear space that is free of type, graphics, and other elements to avoid visual clutter.</p>
            <img src="assets/clearance.png" alt="" />
          </UXWSubsection>
          <UXWSubsection anchor="snav-icongraphy" title="Icongraphy Style">
            <p>Icon designs are intended to be recognized and communicate immediately. Our main icons are outlined style which use a clear stroke and the Magician’s Cloak navy color. Icon + light purple circle background is a variation. This background pops and draws extra attention to the icons. </p><br />
            <img className="my-16 w-4/5" src="assets/icongraphy.png" alt="" />
          </UXWSubsection>
          <UXWSubsection anchor="snav-library" title="Library">
            <p className="pb-16">Library descriptions comes here, Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss?</p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Main Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/horizontal.zip" download>
                      <i className="bi bi-download"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="py-8" src="assets/logo-wide-main.svg" alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Square Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/square.zip" download>
                      <i className="bi bi-download"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="py-8" src="assets/logo-square-main.svg" alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Circle Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/circle.zip" download>
                      <i className="bi bi-download"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="w-24 py-8" src="logo.png" alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Podcast Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/podcast.zip" download>
                      <i className="bi bi-download"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="w-24 py-8" src="assets/podcast.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 my-8">
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Icongraphy
                  </div>
                  <div className="flex-grow"></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/icongraphy.zip" download>
                      <i className="bi bi-download"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="w-3/5 py-12" src="assets/icongraphy.png" alt="" />
                </div>
              </div>
            </div>
          </UXWSubsection>
        </div>
      </div>
    </div>
  )
}
