import { FeatureFlags } from '../../types/featureFlags';
import { getFeatureFlags } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}
export function ToggleFeatures<T>({
    name,
    off,
    on,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlags(name)) return on();
    return off();
}
