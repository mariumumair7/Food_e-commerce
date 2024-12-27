import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-yellow-800 text-white py-12">

        {/* Footer Grid Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Cities */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Locations</h3>
            <ul className="space-y-2">
              <li>Karachi</li>
              <li>Islamabad</li>
              <li>Lahore</li>
              <li>Rawalpindi</li>
              <li>Hyderabad</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Fast Food Delivery</li>
              <li>Catering Services</li>
              <li>Online Ordering</li>
              <li>Franchise Opportunities</li>
              <li>Customer Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: support@crispncrunch.com</li>
              <li>Phone: +92 (300) 123-4567</li>
              <li>Address: 123 Street Line Area DHA, Karachi</li>
              <li>Business Hours: Mon-Sun, 9 AM - 9 PM</li>
            </ul>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-sm">
          <p>
            By using our website, you agree to our{' '}
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="container mx-auto text-center">
        {/* Main Branding */}
        <h2 className="text-4xl font-bold mb-4">Crisp & Crunch</h2>
        <p className="text-lg mb-6">&copy; {new Date().getFullYear()} Crisp & Crunch. All Rights Reserved.</p>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-8 text-lg">
          <Link
            href="https://facebook.com"
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Link>
          <Link
            href="https://instagram.com"
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link
            href="https://twitter.com"
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
