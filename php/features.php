<?php
declare(strict_types=1);

// Makeup SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MakeupFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MakeupBaseFeature();
            case "test":
                return new MakeupTestFeature();
            default:
                return new MakeupBaseFeature();
        }
    }
}
