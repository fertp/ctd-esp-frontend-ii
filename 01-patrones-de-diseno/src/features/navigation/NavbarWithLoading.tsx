import Navbar from './navigation.component';
import { withLoading } from 'features/loading/withLoading';

export const NavbarWithLoading = withLoading(Navbar);
