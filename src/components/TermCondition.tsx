import React from 'react'

const TermCondition = () => {
    return (
        <section id='terms' className="pt-28 pb-20 md:pt-32 md:pb-28">
            <div className="container px-4 md:px-6">
                <a href="/" className=" bg-woof-blue text-white hover:bg-woof-purple transition-colors border rounded-[6px] px-4 py-2">
              Back
                </a>
                <div>
                    <header className="mb-8 text-center">
                        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
                        <p className="mt-2">
                            Welcome to Byldd's Parental Control App Landing webpage. By signing up for early access and using our website, you agree to these Terms and Conditions.
                        </p>
                    </header>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Use of Services</h2>
                        <p className="mb-4">By using Byldd's Parental Control App Landing webpage, you agree that:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>You will provide accurate and current information, including your email address, when signing up for early access.</li>
                            <li>You will use our services responsibly and only for lawful parental monitoring and digital safety purposes.</li>
                            <li>You are responsible for complying with all applicable laws regarding monitoring and privacy.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
                        <p>
                            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Byldd's Parental Control App Landing webpage and is protected by intellectual property laws. You may not use, copy, or distribute any content without prior written permission.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Data Collection &amp; Privacy</h2>
                        <p>
                            By signing up for early access, you agree to receive updates, newsletters, and promotional emails about Byldd's Parental Control App Landing webpage. We respect your privacy and will not sell or share your information with third parties. Our full Privacy Policy outlines how we collect and protect your data.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites for additional resources. We do not endorse or take responsibility for the content or privacy practices of these external sites.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Disclaimer of Warranties</h2>
                        <p>
                            Byldd's Parental Control App Landing webpage is provided on an "as is" and "as available" basis. While we strive to offer a secure and reliable platform, we do not guarantee uninterrupted access, error-free functionality, or complete protection from digital threats.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
                        <p>
                            We are not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Parental supervision and discretion are always advised when using digital safety tools.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate access to our website or services if we believe you are violating these terms or misusing our platform.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
                        <p>
                            These Terms and Conditions are governed by the laws of Hong Kong. Any disputes arising from these terms will be resolved exclusively in the courts of Hong Kong.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
                        <p>
                            We may update these Terms and Conditions at any time. Continued use of our website after any changes means you accept the revised terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                        <p>
                            For questions regarding these Terms and Conditions, please contact us at
                            <a href="mailto:ayush@byldd.com" className="text-blue-500 hover:underline">ayush@byldd.com</a>.
                        </p>
                    </section>
                </div>

            </div>
        </section>
    )
}

export default TermCondition