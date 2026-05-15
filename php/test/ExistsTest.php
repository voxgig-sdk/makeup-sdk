<?php
declare(strict_types=1);

// Makeup SDK exists test

require_once __DIR__ . '/../makeup_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MakeupSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
